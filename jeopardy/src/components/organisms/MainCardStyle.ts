import { SxProps } from "@mui/system";

const Title: SxProps = {
    backgroundColor: '#41B741',
    padding: 8,
    textAlign: 'center',
    height: 10,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 40,
    display: 'flex',
    fontWeight: 'bold',
}

const Card: SxProps = {
    backgroundColor: '#0D880D',
    ":hover": {
        backgroundColor: '#004B00'
    },
    color: "black",
    padding: 8,
    textAlign: 'center',
    height: 10,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 40,
    display: 'flex',
    fontWeight: 'bold',
}

export default { Title, Card };