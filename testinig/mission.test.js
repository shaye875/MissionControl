import test from 'node:test'
import assert from 'node:assert'
import { Mission } from '../Mission.js'
import { Stage } from '../Stage.js'

test('if all fields', () => {
    assert.throws(() => Mission.auditMission(new Mission("7")), { message: "missing one or mor fields" })
})

test('if stage not exist', () => {
    const mission = new Mission("4", "e", "s", "w", "uy")
    mission.addstage("5")
    assert.throws(() => Mission.auditMission(mission), { message: "stage not exist" })
})

test('if time not good', async () => {
    const end = String(new Date())
    let start
    const promis = new Promise((res,rej) => {
        setTimeout(() => {
            res(String(new Date()))
        }, 2000)
    })
    start = await promis
    const mission = new Mission("4", "e", "s", "w", "uy")
    mission.addstage(new Stage("2", "r", "k", start, end))
    assert.throws(() => Mission.auditMission(mission), { message: "time start canot high of end time" })
})

test('if is good',()=>{
    const start = String(new Date())
    const end = String(new Date())
    const mission = new Mission("4", "e", "s", "w", "uy")
    mission.addstage(new Stage("2", "r", "k", start, end))
    assert.equal(Mission.auditMission(mission),true)
})