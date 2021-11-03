import { useContext } from "react";
import { useQuery } from "react-query";
import { authContext } from "../providers/AuthProvider";
import getBalance from "../api/GetBalance";
import './Balance.scss'

export default function Balance() {
  const {user, auth} = useContext(authContext)
  const { data, isLoading } = useQuery('balance', () => getBalance(user));
  if (isLoading) {
    return (<h4 className="balance">Loading...</h4>)
  }
  return (
    <h4 className="balance">Balance: {data.balance}</h4>
  )
}