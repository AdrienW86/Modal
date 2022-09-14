**Content of the modal**

<Modal 
    close = {closeModal} 
    text = "Your text"
/>

**To display the modal, just create a state:**

const [toggle, setToggle] = useState(false)

**and a closeModal function:**

const closeModal = () => {
    setToggle(false)
}

**Then the modal is displayed or not depending on the value of toggle:**

return( 
    <>
    {toggle 
        ?
        <Modal
            close = {closeModal}
            text = "Your text"
        />
        : 
        null
    }
    </>
)

**Github: https://github.com/AdrienW86/Modal.git**
