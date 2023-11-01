import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import githubLogo from "../assets/githubLogo.png"

function MyModal({ userData, hideModal }) {
    return (
        <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
        >


            <Modal.Dialog className='d.flex flex-row p-5'>
                <Container>
                    <Col xs={6} md={4}>
                        <Image className="m-2" src={userData.avatar} roundedCircle />
                    </Col>
                </Container>
                <Modal.Header onClick={hideModal} closeButton>
                    <Modal.Title>
                        {userData.name && <span className='font-bold'>{userData.name}</span>}
                        {userData.name && <br />}
                        <span className={userData.name ? 'text-gray-400' : 'font-bold'}>{userData.login}</span>
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>{userData.bio}</p>
                    <p>{userData.followers} followers | {userData.following} following | {userData.reposAmount} repos</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button size="sm" href={userData.url} variant="light">
                        <Image className='w-7' thumbnail src={githubLogo} roundedCircle />
                    </Button>
                    <Button variant="secondary" onClick={hideModal}>Close</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    );
}

export default MyModal;

// if (userData.name === null) {

