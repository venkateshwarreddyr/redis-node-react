import { ADD_COMMENT } from 'actions/types';
import { addComment } from 'actions/actions';

describe('addComment', ()=>{
    it('check type', ()=>{
        const action = addComment('New Comment');
        expect(action.type).toEqual(ADD_COMMENT);
    })
    it('check payload', ()=>{
        const action = addComment('New Comment');
        expect(action.payload).toEqual('New Comment');
    })
})