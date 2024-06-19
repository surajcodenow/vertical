import RightSidebar from "@/components/RightSidebar";
import Headerbox from "@/components/ui/HeaderBox"
import TotalBalanceBox from "@/components/ui/TotalBalanceBox";
import React from "react"

const Home = ()=>{
    const loggedin = { firstName: 'Suraj', lastName: 'Upadhyay',email:'surajofficialwork24@gmail.com'};
    return(
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    <Headerbox 
                    type="greeting"
                    title="Welcome"
                    user={loggedin?.firstName || 'guest'}
                    subtext="Access and manage your account here."
                    />
                    <TotalBalanceBox
                    accounts={[]}
                        totalBanks={1}
                        totalCurrentBalance={1250.45}
                    />
                </header>
                RECENT TRANSACTIOn
            </div>

            <RightSidebar
            user={loggedin}
            transactions={[]}
            banks={[{ currentBalance: 123.50},{
                currentBalance: 500.5
            }]} />
        </section>
    )
}

export default Home