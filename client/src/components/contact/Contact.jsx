
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(http://mrtaba.ir/image/bg2.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px top -100px;
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


const Contact = () => {
    return (
        <Box>
            <Banner />
            <Wrapper>
                <Typography variant="h3">Getting in touch is easy!</Typography>    
                <Text variant="h5">
                We value your feedback, questions, and suggestions. Our team is here to provide you with the best assistance possible.
                    Feel free to send us an email 
                    <Link href="mailto:anirudh1500@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                        <Email />
                    </Link>.

                    <Text variant="h5">
                    We look forward to assisting you on your path to success. Let us be your trusted companion in achieving your academic goals.

                    <Box component="span" style={{ marginLeft: 5 }}>
                       
                    </Box>  
                       
                </Text>
                </Text>
            </Wrapper>
        </Box>
    );
}

export default Contact;