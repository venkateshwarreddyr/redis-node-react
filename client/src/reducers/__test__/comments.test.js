import commentsReducer from '../comments';
import { ADD_COMMENT } from 'actions/types';

it('handle action ADD_COMMENT', ()=>{
    const action = {
        type: ADD_COMMENT,
        payload:'This is New Comment'
    }
    const store = commentsReducer([], action)
    expect(store).toEqual(['This is New Comment'])
})
it('handle action with unknown TYPES', ()=>{
    const action = {
        type:'ABCDEF'
    }
    const store = commentsReducer([], action)
    expect(store).toEqual([])
})