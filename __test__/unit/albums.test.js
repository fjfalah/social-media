describe('Albums', () => {
  const sampleAlbumData = {
    id: 91,
    title: 'repellendus praesentium debitis officiis',
    userId: 10,
  }

  test('Has Title', () => {
    expect(typeof sampleAlbumData.title).toBe('string')
    expect(sampleAlbumData.title.length).toBeGreaterThan(0)
    expect.assertions(2)
  })
})
