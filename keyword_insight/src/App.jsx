import { styled } from "styled-components"
import { useState } from "react"
import { fetchVideos, selectedKeyword } from "./store/slices/videos";
import { useDispatch, useSelector } from "react-redux"

const Container = styled.div`
  margin: auto;
  max-width: 1200px;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  padding: 3rem 0 3rem 0;

  input{
    background-color: white;
    border: none;
    border-radius: 999px;
    padding: .5rem 1rem .5rem 1rem;
    margin: 2rem 0 2rem 0;
    color: black;
    outline: none;
    width: 20rem;
  }

  button{
    background-color: yellow;
    color: black;
    padding: .5rem 1rem;
    border-radius: 9999px;
    border: 1px solid black;
    margin-left: 1rem;
  }

  div{
    display: flex;
    justify-content: space-between;
    max-width: 800px;
    width: 100%;
    flex-wrap: wrap;
  }

  strong{
    color: yellow;
  }
`

function App() {
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();
  const { videosData, word } = useSelector((state) => state.videos)

  const submit = (e) => {
    e.preventDefault();
    if (keyword) {
      dispatch(fetchVideos(keyword));
      dispatch(selectedKeyword(keyword));
      setKeyword('')
    } else {
      alert("enter keyword")
    }
  };

  return (
    <>
      <Container>
        <h1>Keyword Insight</h1>
        <form onSubmit={submit}>
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Enter Keyword"
          />
          <button type="submit">Search</button>
        </form>
        <div>
          <p><strong>Keyword:</strong> {word}</p>
          <p><strong>Total Result:</strong> {videosData}</p>
        </div>
      </Container>
    </>
  );
}

export default App