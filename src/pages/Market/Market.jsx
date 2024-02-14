import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import landImg from '../../assets/land.jpg';
import ToolBar from '../../components/ToolBar';
import Details from '../../components/Details';
import OverView from '../../components/OverView';
import ProfileComplete from '../../components/ProfileComplete';
import LandStatus from '../../components/LandStatus';

const Market = () => {
    return (
        <div className="flex flex-col gap-1">
            <div className="p-10 h-20 flex items-center justify-between bg-white">
                <button className="p-2 bg-blue-600 text-white">
                    Complete Profile
                </button>
                <NotificationsIcon className="cursor-pointer" />
            </div>

            <ToolBar />

            <div className="flex flex-col h-90 px-10 py-3 bg-white">
                <div className="flex p-3 gap-2 ml-[-820px] items-center justify-center">
                    <p className="cursor-pointer">JMarket</p>
                    <ArrowForwardIosIcon style={{ fontSize: '18px' }} />
                    <p className="cursor-pointer">Category 1</p>
                    <ArrowForwardIosIcon style={{ fontSize: '18px' }} />
                    <p className="cursor-pointer">Theme Park Site</p>
                    <ArrowForwardIosIcon style={{ fontSize: '18px' }} />
                </div>

                <div className="w-100 h-72 overflow-hidden">
                    <img
                        src={landImg}
                        alt="landImg"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            <Details />

            <div className="flex flex-row h-200 gap-1">
                <OverView />

                {/* right div... */}
                <div className="flex-1 flex flex-col gap-1">
                    <ProfileComplete />

                    {/* LandStatusdDiv */}
                    <LandStatus />
                </div>
            </div>
        </div>
    );
};

export default Market;
