describe('Photos', () => {
  const samplePhotoData = {
    albumId: 91,
    id: 4501,
    thumbnailUrl: 'https://via.placeholder.com/150/71f4a0',
    title: 'adipisci consequuntur facilis doloremque dolor eveniet eius eos quo',
    url: 'https://via.placeholder.com/600/71f4a0',
  }

  test('Has Title', () => {
    expect(typeof samplePhotoData.title).toBe('string')
    expect(samplePhotoData.title.length).toBeGreaterThan(0)
    expect.assertions(2)
  })

  test('Has Thumbnail', () => {
    expect(typeof samplePhotoData.thumbnailUrl).toBe('string')
    expect(samplePhotoData.thumbnailUrl.length).toBeGreaterThan(0)
    expect.assertions(2)
  })

  test('Has Photo', () => {
    expect(typeof samplePhotoData.url).toBe('string')
    expect(samplePhotoData.url.length).toBeGreaterThan(0)
    expect.assertions(2)
  })
})
