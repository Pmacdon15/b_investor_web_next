'use server';
import {auth} from '../../auth';
import Footer from '../../footer/footer'
export default async function Transactions({ params }: { params: { userName: string } }) {
    const decodedUserName = decodeURIComponent(params.userName);
    await auth(decodedUserName);
    return (
        <div>
            <h1>Transactions</h1>
            <p>User Name: {decodedUserName}</p>
            <Footer userName={decodedUserName}/>
        </div>
    )
}