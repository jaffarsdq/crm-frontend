import { Bar, Line,Pie } from 'react-chartjs-2';
import { BsFillPencilFill } from 'react-icons/bs';
import { MdCancel,MdOutlineDoneAll, MdPending } from 'react-icons/md';
import { TbProgressBolt } from 'react-icons/tb';

import Card from '../../components/Card';
import useCharts from "../../hooks/useCharts";
import useTickets from '../../hooks/useTickets';
import HomeLayout from '../../layouts/Homelayout';


function Home() {

    const [ticketsState] = useTickets();
    const [pieChartData, lineChartData, barChartData] = useCharts();

    return (
        <HomeLayout>
            <div className='flex flex-col absolute inset-20 gap-5 -z-10 m-4'>
                {ticketsState && (
                    <div className='flex justify-around flex-wrap'>
                        <Card 
                            titleText='Open' 
                            status={ticketsState.ticketDistribution.open / ticketsState.downloadedTickets.length} 
                            quantity={ticketsState.ticketDistribution.open}
                            background='bg-yellow-300' 
                            borderColor='border-green-300' 
                            fontColor='text-black' 
                            dividerColor='bg-black'
                        >
                            <BsFillPencilFill className='inline mr-2' />
                        </Card>
                        <Card 
                            titleText='In Progress' 
                            status={ticketsState.ticketDistribution.inProgress / ticketsState.downloadedTickets.length} 
                            quantity={ticketsState.ticketDistribution.inProgress}
                            background='bg-orange-300' 
                            borderColor='border-red-300' 
                            fontColor='text-black' 
                            dividerColor='bg-black'
                        >
                            <TbProgressBolt className='inline mr-2' />
                        </Card>
                        <Card 
                            titleText='Resolved' 
                            status={ticketsState.ticketDistribution.resolved / ticketsState.downloadedTickets.length} 
                            quantity={ticketsState.ticketDistribution.resolved}
                            background='bg-purple-300' 
                            borderColor='border-blue-700' 
                            fontColor='text-black' 
                            dividerColor='bg-black'
                        >
                            <MdOutlineDoneAll className='inline mr-2' />
                        </Card>
                        <Card 
                            titleText='On Hold' 
                            status={ticketsState.ticketDistribution.onHold / ticketsState.downloadedTickets.length} 
                            quantity={ticketsState.ticketDistribution.onHold}
                            background='bg-gray-300' 
                            borderColor='border-gray-800' 
                            fontColor='text-black' 
                            dividerColor='bg-black'
                        >
                            <MdPending className='inline mr-2' />
                        </Card>
                        <Card 
                            titleText='Cancelled' 
                            status={ticketsState.ticketDistribution.cancelled / ticketsState.downloadedTickets.length} 
                            quantity={ticketsState.ticketDistribution.cancelled}
                            background='bg-blue-300' 
                            borderColor='border-violet-300' 
                            fontColor='text-black' 
                            dividerColor='bg-black'
                        >
                            <MdCancel className='inline mr-2' />
                        </Card>
                    </div>
                )}

                <div className="m-5 flex flex-col justify-center items-center gap-20">
                        <div className="w-80 h-80 mt-5">
                            <Pie data={pieChartData}/>
                        </div>
                        
                        <div className="w-[50rem] bg-[wheat]">
                            <Line data={lineChartData}/>
                        </div>

                        <div className="w-[50rem] bg-[wheat] mb-20">
                            <Bar data={barChartData}/>
                        </div>
  
                </div>
            </div>
        </HomeLayout>
    );
}

export default Home;