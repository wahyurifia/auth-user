// src/data/supabaseService.js
import { convertDate } from '@/utils/moment';
import axios from 'axios';

const SUPABASE_URL = 'https://hijqneieqtjcuznkdexk.supabase.co/';
const SUPABASE_API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhpanFuZWllcXRqY3V6bmtkZXhrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkwODIzNzcsImV4cCI6MjA0NDY1ODM3N30.7HoeW_pCrFZ2PuD-qeLGedpeFQUuBlHZlmmiaEtDXFg';

export const fetchDataFromSupabase = async (table) => {
    try {
        const response = await axios.get(`${SUPABASE_URL}/rest/v1/${table}`, {
            headers: {
                apiKey: SUPABASE_API_KEY,
                // Authorization: `Bearer ${SUPABASE_API_KEY}`,
            },
        });

        const formattedData = response.data.map((item) => ({
            name: item.name,
            email: item.email,
            role: item.role,
            status: item.isDeleted,
            date: convertDate(item.createAt)
        }));

        return (formattedData);
    } catch (error) {
        console.error('Error fetching data from Supabase:', error);
        throw error;
    }
};
