const repos = [{
  id: 1,
  name: 'maimai',
  des: 'he is a ugly boy',
}, {
  id: 2,
  name: 'xiongxiong',
  des: 'he is a healthy boy',
}, {
  id: 3,
  name: 'qiqi',
  des: 'strong boy',
}];
const owners = [{
  name: 'maimais',
  des: 'hhiahndomas',
  libs: 'ansodan',
}, {
  name: 'xiongxiong',
  des: 'dasdasda',
  libs: 'dasdasdasd',
}, {
  name: 'qiqi',
  des: 'dawmdao',
  libs: 'dmanowdijnmao',
}];

function getReposById(id) {
  return new Promise((reslove, reject) => {
    const repo = repos.find((re) => re.id === id);
    if (repo) {
      reslove(repo);
    } else {
      reject(Error('There is not repo!'));
    }
  });
}

function getOwersByname(repo) {
  return new Promise((reslove, reject) => {
    const owner = owners.find((owne) => owne.name === repo.name);
    if (owner) {
      reslove(owner);
    } else {
      reject(Error('There is not owner'));
    }
  });
}

getReposById(1).then((data) => getOwersByname(data)).then((data) => {
  console.log(data);
}).catch((erro) => {
  console.error(erro);
});
