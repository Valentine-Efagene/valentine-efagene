import React, { useEffect, useState } from 'react'

const USERS_URL = 'https://example.com/api/users'

export default function Table() {
  const [page, setPage] = useState(0)
  const [users, setUsers] = useState([])
  const [n, setN] = useState(0)

  async function init() {
    // const {results, count} = await fetch(`${USERS_URL}?page=${page}`);
    const { results, count } = {
      count: 13,
      results: [
        { id: 1, firstName: 'David', lastName: 'Wallace' },
        { id: 2, firstName: 'Sonia', lastName: 'Ross' },
        { id: 3, firstName: 'Anthony', lastName: 'Thomson' },
        { id: 4, firstName: 'Anthony', lastName: 'Thomson' },
        { id: 5, firstName: 'Anthony', lastName: 'Thomson' },
        { id: 6, firstName: 'Anthony', lastName: 'Thomson' },
        { id: 7, firstName: 'Anthony', lastName: 'Thomson' },
        { id: 8, firstName: 'Anthony', lastName: 'Thomson' },
        { id: 9, firstName: 'Anthony', lastName: 'Thomson' },
        { id: 10, firstName: 'Anthony', lastName: 'Thomson' },
        { id: 11, firstName: 'Anthony', lastName: 'Thomson' },
        { id: 12, firstName: 'Anthony', lastName: 'Thomson' },
      ],
    }

    setN(count)
    setUsers(results)
  }

  useEffect(() => {
    init()
  }, [])

  useEffect(() => {
    init()
  }, [page])

  useEffect(() => {
    init()
  }, [])

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <>
                <tr key={index}>
                  <th>{user?.id}</th>
                  <th>{user?.firstName}</th>
                  <th>{user?.lastName}</th>
                </tr>
              </>
            )
          })}
        </tbody>
      </table>
      <section className="pagination">
        <button
          onClick={() => {
            setPage(0)
          }}
          className="first-page-btn"
        >
          first
        </button>
        <button
          onClick={() => {
            setPage((prevState) => prevState--)
          }}
          className="previous-page-btn"
        >
          previous
        </button>
        <button
          onClick={() => {
            setPage((prevState) => prevState++)
          }}
          className="next-page-btn"
        >
          next
        </button>
        <button
          onClick={() => {
            setPage(9)
          }}
          className="last-page-btn"
        >
          last
        </button>
      </section>
    </div>
  )
}
