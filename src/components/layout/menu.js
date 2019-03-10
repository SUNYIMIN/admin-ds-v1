const Menu = [
  {
    key: 'sub1',
    title: '流量合作',
    child: [
      {
        key: 1,
        title: "我得子账号",
        url: "account"
      },
      {
        key: 2,
        title: "我得媒体",
        url: 'media'
      },
      {
        key: 3,
        title: "我的广告位",
        url: 'adver'
      }
    ]
  },
  {
    key: 'sub2',
    title: '账户管理',
    child: [
      {
        key: 4,
        title: "账户信息",
        url: 'accountInfo'
      },
      {
        key: 5,
        title: "财务管理",
        url: 'finance'
      }
    ]
  }
]

export default Menu;