import { object, string } from 'zod'

const envsSchema = object({
  apiKey: string(),
  authDomain: string(),
  databaseURL: string(),
  projectId: string(),
  storageBucket: string(),
  messagingSenderId: string(),
  appId: string(),

  measurementId: string(),
  version: string(),

  supabaseUrl: string(),
  supabasePublicAnonKey: string()
})

const envs = envsSchema.parse({
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,

  measurementId: process.env.MEASUREMENT_ID,
  version: process.env.VERSION,

  supabaseUrl: process.env.SUPABASE_URL,
  supabasePublicAnonKey: process.env.SUPABASE_PUBLIC_ANON_KEY
})

export default envs
