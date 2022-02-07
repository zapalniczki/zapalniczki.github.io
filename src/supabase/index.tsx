import { createClient } from '@supabase/supabase-js'
import envs from 'envs'

const supabase = createClient(envs.supabaseUrl, envs.supabasePublicAnonKey)

export default supabase
