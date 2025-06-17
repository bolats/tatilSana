
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ikqaubpjtqvxgewnqaob.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlrcWF1YnBqdHF2eGdld25xYW9iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY2MjczMzMsImV4cCI6MjA2MjIwMzMzM30.rxsLfAogKcLGmvceYAgW1SFeyaCPamYmEgxiopHnoXc';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
