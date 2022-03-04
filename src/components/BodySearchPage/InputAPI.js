import { getDevs } from '../../helpers/devsAPI';

export const InputAPI = () =>{
    return (
        <input type={'text'} onKeyPress={event => {
                if (event.key === 'Enter') {
                    getDevs();
            }
        }}></input>
    );
}