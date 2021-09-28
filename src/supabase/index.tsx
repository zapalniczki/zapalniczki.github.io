import { createClient } from '@supabase/supabase-js'
import config from './config'

const { url, publicAnonKey } = config

if (!url) {
  throw new Error('No SUPABASE_URL in envs ')
}

if (!publicAnonKey) {
  throw new Error('No SUPABASE_PUBLIC_ANON_KEY in envs ')
}

const supabase = createClient(url, publicAnonKey)

export default supabase
