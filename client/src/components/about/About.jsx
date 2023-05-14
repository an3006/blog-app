
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;

const About = () => {

    return (
        <Box>
            <Banner/>
            <Wrapper>
                <Typography variant="h3">Exam Assistance Blogs</Typography>
                <Text variant="h5">Welcome to our Exam Assistance Blog! We are dedicated to helping you excel in your exams. Explore our expert resources, study tips, practice tests, 
                and personalized tools to boost your performance. 
                Get ready to unlock your full potential and achieve your academic goals with our comprehensive exam support.<br />
                    
                
                </Text>
                <Text variant="h5">
                The Exam Assistance Blog is a web application designed to provide comprehensive support and guidance to students preparing for various exams. It offers a user-friendly platform where students 
                can access a wide range of study materials, tips, and strategies to enhance their exam performance. The blog features expertly curated
                articles, video tutorials, practice tests, and interactive study tools to cater to different learning styles. Additionally, it offers
                personalized exam schedules, progress tracking, and reminders to help students stay organized and motivated throughout their exam 
                preparation journey. With its rich content and intuitive interface, the Exam Assistance Blog is an invaluable companion for students
                striving for academic success.
                    <Box component="span" style={{ marginLeft: 5 }}>
                       
                    </Box>  
                        or send me an Email                       
                            <Email />
                          .
                </Text>
            </Wrapper>
        </Box>
    )
}

export default About;