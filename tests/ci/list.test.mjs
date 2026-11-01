// Protected suite for the synthetic list (ORQEST M2 live slice). The suite revision supplies this file at
// tests/protected/list.test.mjs; a candidate's own copy of that path is replaced. Each test reports how
// many assertions it ran (the runner refuses a pass without that report).
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { List, EMPTY_STATE } from '../../src/list.mjs'

const counted = (t, checkId, assertions) => {
  let ran = 0
  for (const assertion of assertions) {
    assertion()
    ran += 1
  }
  t.diagnostic(`orqest-assertions ${checkId} ${ran}`)
}

test('list-empty', (t) => {
  counted(t, 'list-empty', [() => assert.equal(List({ items: [] }), EMPTY_STATE)])
})

test('list-items', (t) => {
  counted(t, 'list-items', [
    () => assert.equal(List({ items: ['a', 'b'] }), '<li>a</li><li>b</li>'),
    () => assert.equal(List({ items: ['x'] }), '<li>x</li>'),
  ])
})
