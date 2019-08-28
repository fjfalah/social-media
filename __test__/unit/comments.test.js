describe('Comments', () => {
  const sampleCommentData = {
    body: 'neque unde voluptatem iure↵odio excepturi ipsam ad id↵ipsa sed expedita error quam↵voluptatem tempora necessitatibus suscipit culpa veniam porro iste vel',
    email: 'Zola@lizzie.com',
    id: 496,
    name: 'et occaecati asperiores quas voluptas ipsam nostrum',
    postId: 100,
  }

  test('Has Name', () => {
    expect(typeof sampleCommentData.name).toBe('string')
    expect(sampleCommentData.name.length).toBeGreaterThan(0)
    expect.assertions(2)
  })

  test('Has Description', () => {
    expect(typeof sampleCommentData.body).toBe('string')
    expect(sampleCommentData.body.length).toBeGreaterThan(0)
    expect.assertions(2)
  })

  test('Has Email', () => {
    expect(typeof sampleCommentData.email).toBe('string')
    expect(sampleCommentData.email.length).toBeGreaterThan(0)
    expect.assertions(2)
  })

  test('Has Post ID', () => {
    expect(typeof sampleCommentData.postId).toBe('number')
    expect(sampleCommentData.postId).toBeGreaterThan(0)
    expect.assertions(2)
  })
})
