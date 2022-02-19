import { icon, label, mold } from 'braty-common'
import { TypeOf } from 'zod'

const getMoldsResponseItem = mold
  .pick({
    id: true,
    created_at: true,
    updated_at: true,
    status: true
  })
  .extend({
    icon: icon.pick({
      label_pl: true,
      label_en: true
    }),
    label: label.pick({
      key: true
    })
  })

export type GetMoldsResponseItem = TypeOf<typeof getMoldsResponseItem>

export default getMoldsResponseItem
