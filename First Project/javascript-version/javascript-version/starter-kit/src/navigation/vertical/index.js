const navigation = () => {
  return [
    {
      title: 'Home',
      path: '/home',
      icon: 'mdi:home-outline'
    },
    {
      title: 'Type of Use Master',
      path: '/second-page',
      icon: 'mdi:email-outline'
    },
    {
      title: 'new page',
      path: '/newpage',
      icon: 'mdi:email-outline'
    },

    {
      path: '/acl',
      action: 'read',
      subject: 'acl-page',
      title: 'Access Control',
      icon: 'mdi:shield-outline'
    }
  ]
}

export default navigation
