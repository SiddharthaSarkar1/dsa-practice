//First Letter Capital

function titleCase(str) {
  let newtitle = str.split(" ");
  let updatedTitle = [];

  for (let st in newtitle) {
    updatedTitle[st] =
      newtitle[st][0].toUpperCase() + newtitle[st].slice(1).toLowerCase();
  }

  return updatedTitle.join(" ");
}

titleCase("I'm a little tea pot");
