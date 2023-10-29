function ComposePostTextArea() {
  return (
    <textarea
      //   ref={textAreaRef}
      className="w-full h-20 text-xl bg-black border-none placeholder-gray-500 focus-visible:outline-none"
      placeholder="What's happening?"
      name="content"
      id=""
      rows={10}
    ></textarea>
  );
}

export default ComposePostTextArea;
