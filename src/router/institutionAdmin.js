import Index from '@/pages/InstitutionAdmin/Index/index'
import DashBoard from '@/pages/InstitutionAdmin/DashBoard/index'
import InformationManager from '@/pages/InstitutionAdmin/InformationManager/index'
import PublishInformation from '@/pages/PublishInformation/index'

const institutionAdminRoutes = [
  {
    path: '/insitution-admin', component: Index, children: [
      { path: '/', redirect: 'dashboard' },
      { path: 'dashboard', component: DashBoard },
      { path: 'informationManager', component: InformationManager },
      { path: 'publishInformation', component: PublishInformation },
    ]
  }
]

export default institutionAdminRoutes
