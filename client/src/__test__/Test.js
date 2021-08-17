

const Test = () => {
  const tt = () => {
    /*
    fetch("/test", {
      method: "get",
      headers: { "Content-Type": "application/json" }
    })
      .then(res => res.json())
      .then(data => { console.log("res from server: ", data) })
      .catch(err => { console.log("err:", err) })
  }
*/

    fetch("/test")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
      })
  }
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <input
          style={{ marginTop: "30px" }}
          type="button"
          value="fetch"
          onClick={tt}
        />

      </div>
    </>
  )
}
export default Test