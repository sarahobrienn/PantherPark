import { createClient } from '@supabase/supabase-js'
const supabase = createClient(
    'https://lcjrzdoybrxmlxunfaas.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxjanJ6ZG95YnJ4bWx4dW5mYWFzIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5OTkzMTY5NSwiZXhwIjoyMDE1NTA3Njk1fQ.mJUZcValGiYJXzm0CBHOxlsYUSetIQWSfS4HPMDSofE',

)


export const getUsers = async () =>  { 
    const { data, error } = await supabase
    .from('user')
    .select() 
    return data
}
