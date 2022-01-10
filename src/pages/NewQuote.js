import QuoteForm from "../components/quotes/QuoteForm";
import { useHistory } from "react-router";
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";
import { useEffect } from "react";
const NewQuote = () => {
  const history = useHistory();
  const { sendRequest, status } = useHttp(addQuote);

  useEffect(() => {
    if (status === "completed") {
      //navigate away
      history.push("/quotes");
    }
  }, [status, history]); //history object

  const addQuoteHandler = (quotedata) => {
    //send to server
    sendRequest(quotedata);

    //if invliad return and display invalid data
    // if (quotedata.author === "") {
    //   return;
    // }
    // history.push("/quotes");
  };
  console.log(status);
  return (
    <QuoteForm isLoading={status === "pending"} onAddQuote={addQuoteHandler} />
  );
};

export default NewQuote;
