import styles from './Square.module.css';
const Square = ({value,chooseSquare}) =>{
return (
    <div className={styles.square}  onClick={chooseSquare}>{value}</div>
)
}

export default Square;