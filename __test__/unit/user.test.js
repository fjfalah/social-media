describe('Users', () => {
  const sampleUserData = {
    id: 10,
    name: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',
    address: {
      street: 'Kattie Turnpike',
      suite: 'Suite 198',
      city: 'Lebsackbury',
      zipcode: '31428-2261',
      geo: {
        lat: '-38.2386',
        lng: '57.2232',
      },
    },
    phone: '024-648-3804',
    website: 'ambrose.net',
    company: {
      name: 'Hoeger LLC',
      catchPhrase: 'Centralized empowering task-force',
      bs: 'target end-to-end models',
    },
  }

  test('Has ID', () => {
    expect(typeof sampleUserData.id).toBe('number')
    expect(sampleUserData.id).toBeGreaterThan(0)
    expect.assertions(2)
  })

  test('Has Name', () => {
    expect(typeof sampleUserData.name).toBe('string')
    expect(sampleUserData.name.length).toBeGreaterThan(0)
    expect.assertions(2)
  })

  test('Has Username', () => {
    expect(typeof sampleUserData.username).toBe('string')
    expect(sampleUserData.username.length).toBeGreaterThan(0)
    expect.assertions(2)
  })
})
