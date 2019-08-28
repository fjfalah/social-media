describe('Posts', () => {
  const samplePostData = {
    body: 'cupiditate quo est a modi nesciunt soluta↵ipsa voluptas error itaque dicta in↵autem qui minus magnam et distinctio eum↵accusamus ratione error aut',
    id: 100,
    title: 'at nam consequatur ea labore ea harum',
    userId: 10,
  }

  test('Has Title', () => {
    expect(typeof samplePostData.title).toBe('string')
    expect(samplePostData.title.length).toBeGreaterThan(0)
    expect.assertions(2)
  })

  test('Has Description', () => {
    expect(typeof samplePostData.body).toBe('string')
    expect(samplePostData.body.length).toBeGreaterThan(0)
    expect.assertions(2)
  })

  test('Has User ID', () => {
    expect(typeof samplePostData.userId).toBe('number')
    expect(samplePostData.userId).toBeGreaterThan(0)
    expect.assertions(2)
  })
})
