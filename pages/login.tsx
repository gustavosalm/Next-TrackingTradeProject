import type { NextPage } from 'next'
import styles from '../styles/Login.module.css'
import { Container, Form, Button } from 'react-bootstrap'

const Login: NextPage = () => {
    return (
        <div className={styles.loginPage}>
            <Container className={styles.container}>
                <Form>
                    <Form.Group controlId="email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter password" />
                    </Form.Group>
                </Form>
                    <Button className="mt-3">Log in</Button>
            </Container>
        </div>
    )
}

export default Login;