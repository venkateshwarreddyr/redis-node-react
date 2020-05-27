import React from 'react';
import CommentBox from './CommentBox';
import CommentList from './CommentList';
import UsersReg from './UsersReg';

const App = () => {
    return ( 
        <>
        <UsersReg />
        <CommentBox />
        <CommentList />
        </>
     );
}
 
export default App;