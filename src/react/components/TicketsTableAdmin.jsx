import React from 'react'
import MaterialTable from 'material-table'
import jMoment from 'moment-jalaali'
import { Container } from '@material-ui/core';
import { setTicketAnswer } from '../../redux/actions/ticketActions';

jMoment.loadPersian({ dialect: "persian-modern", usePersianDigits: true })

export default function TicketsTableAdmin({ tickets, token, dispatch }) {

    const columns = [
        { title: 'نام', field: 'user', editable: 'never' },
        { title: 'تاریخ', field: 'updated_at', editable: 'never' },
        { title: 'عنوان', field: 'title', editable: 'never' },
        { title: 'متن', field: 'text', editable: 'never' },
        { title: 'پاسخ', field: 'answer' },
        {
            title: 'وضعیت',
            field: 'status',
            lookup: {
                'فعال': 'فعال',
                'خاتمه یافته': 'خاتمه یافته'
            },
            editable: 'never'
        }
    ]

    const data = tickets.map((ticket) => {
        return {
            ...ticket,
            user: ticket.user.name,
            updated_at: jMoment(ticket.updated_at).format('jYYYY/jMM/jDD')
        }
    })

    return (
        <Container maxWidth='lg' className='mt-5'>
            <MaterialTable
                title="لیست تیکت ها"
                columns={columns}
                data={data}
                localization={{
                    body: {
                        editRow: {
                            deleteText: 'آیا از حذف این گزینه مطمئن هستید؟'
                        }
                    }
                }}
                editable={{
                    onRowUpdate: (newData, oldData) => {
                        return new Promise((resolve) => {
                            const values = {
                                id: newData.id,
                                answer: newData.answer
                            }
                            dispatch(setTicketAnswer(values, token))
                            resolve()
                        })
                    },
                }}
            />
        </Container>
    )
}


