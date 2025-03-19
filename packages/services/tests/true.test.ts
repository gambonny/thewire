describe.concurrent('a test', () => {
  it('matches the snapshot', ({ expect }) => {
    expect.assertions(1)
    expect(true).toBe(true)
  })
})
