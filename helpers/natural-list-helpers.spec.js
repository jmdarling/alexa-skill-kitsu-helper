/* eslint-env jest */

const { buildNaturalLanguageList } = require('./natular-language-list-helpers')

describe('natural-list-helpers', () => {
  describe('buildNaturalList', () => {
    it('simply returns a list with 1 item', () => {
      // Arrange.
      const list = ['a']

      // Act.
      const naturalLanguageList = buildNaturalLanguageList(list)

      // Assert.
      expect(naturalLanguageList).toBe('a')
    })

    it('Properly creates a natural langage list with 2 items', () => {
      // Arrange.
      const list = ['a', 'b']

      // Act.
      const naturalLanguageList = buildNaturalLanguageList(list)

      // Assert.
      expect(naturalLanguageList).toBe('a and b')
    })

    it('Properly creates a natural langage list with 3 items', () => {
      // Arrange.
      const list = ['a', 'b', 'c']

      // Act.
      const naturalLanguageList = buildNaturalLanguageList(list)

      // Assert.
      expect(naturalLanguageList).toBe('a, b and c')
    })

    it('Properly creates a natural langage list with 4 items', () => {
      // Arrange.
      const list = ['a', 'b', 'c', 'd']

      // Act.
      const naturalLanguageList = buildNaturalLanguageList(list)

      // Assert.
      expect(naturalLanguageList).toBe('a, b, c and d')
    })
  })
})
