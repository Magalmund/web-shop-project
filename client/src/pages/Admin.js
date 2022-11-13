import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateDevice from "../components/modals/CreateDevice";
import CreateBrand from "../components/modals/CreateBrand";
import CreateType from "../components/modals/CreateType";

const Admin = () => {
    const [brandVisible, setBrandVisible] = useState()
    const [typeVisible, setTypeVisible] = useState()
    const [deviceVisible, setDeviceVisible] = useState()
    return (
        <Container className="d-flex flex-column">
            <Button onClick={() => setTypeVisible(true)} variant={"outline-dark"} className="mt-2">Добавить тип</Button>
            <Button onClick={() => setBrandVisible(true)} variant={"outline-dark"} className="mt-2">Добавить бренд</Button>
            <Button onClick={() => setDeviceVisible(true)} variant={"outline-dark"} className="mt-2">Добавить устройство</Button>
            <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
            <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)}/>
        </Container>
    );
};

export default Admin;