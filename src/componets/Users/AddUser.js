
import react, {useState} from 'react' ;
import Card from '../UI/Card'
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

const  AddUser = props => {
    
    const [enterUsername, setEnterUsername] = useState('')
    const [enterAge, setEnterAge] = useState('')
    const [error,setError] = useState("")
    
    const AddUserHandler = (event) =>{
        event.preventDefault();

        if(enterUsername.trim().length==0 || enterAge.trim().length == 0){
            setError({
                'title':'Invalid input',
                'message':'Please enter valid name and age(non-empty-values)'
            })
            return;
        }
        if(+enterAge < 1){
            setError({
                'title':'Invalid age',
                'message':'Please enter valid age(>0)'
            })
            return;
        }
        props.onAddUser(enterUsername,enterAge);
        console.log(enterUsername,enterAge)
        
        setEnterUsername("")
        setEnterAge("")

    }
    const usernameChangeHandler = (event) => {
        setEnterUsername(event.target.value );
    }

    const userageChangeHandler = (event) => {
        setEnterAge(event.target.value );
    }

    const ErrorHandler = () =>{
        setError(null);
    }

    return(
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={ErrorHandler}/>}
            <Card className={classes.input}>
                <form onSubmit={AddUserHandler}>
                    <label>UserName</label>
                    <input id= "username" type="text" value={enterUsername} onChange={usernameChangeHandler}/>
                    <label>Age (years)</label>
                    <input id= "age" type="number" value={enterAge} onChange={userageChangeHandler}/>
                    <button type="submit">Add User</button>
                </form>
            </Card>
        </div>    
    )

};

export default AddUser