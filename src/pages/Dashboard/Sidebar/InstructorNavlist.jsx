import DashCustomNavlink from './DashCustomNavlink';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import DashCusNavMobile from './DashCusNavMobile';
import useInstructor from '../../../hooks/useInstructor';

export const InstructorNavlistPC = () => {
    const [isInstructor,isInstructorLoading] = useInstructor()
    console.log(isInstructor);
    return (
        <div>
            {isInstructor && <DashCustomNavlink to='/dashboard/addClass' title='Add Class' icon={<AddCircleIcon></AddCircleIcon>}></DashCustomNavlink>}
            {isInstructor && <DashCustomNavlink to='/dashboard/instructor/myClassess' title='My Classess' icon={<VideoLibraryIcon></VideoLibraryIcon>}></DashCustomNavlink>}
        </div>
    );
};

export const InstructorNavlistMobile = ({handleDrawerToggle}) => {
    const instructore = false
    return (
        <div>
            {instructore && <DashCusNavMobile to='/dashboard/addClass' title='Add Class' icon={<AddCircleIcon></AddCircleIcon>}></DashCusNavMobile>}
            {instructore && <DashCusNavMobile to='/dashboard/instructor/myClassess' title='My Classess' icon={<VideoLibraryIcon></VideoLibraryIcon>}></DashCusNavMobile>}
        </div>
    );
};