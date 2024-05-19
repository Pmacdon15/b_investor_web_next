'use server';
import {auth} from '../../auth';
import Footer from '../../footer/footer'
export default async function Profile({ params }: { params: { userName: string } }) {
    const decodedUserName = decodeURIComponent(params.userName);
    await auth(decodedUserName);
    return (
        <div>
            <h1>Profile</h1>
            <p>User Name: {decodedUserName}</p>
            <Footer userName={decodedUserName}/>
        </div>
    )
}