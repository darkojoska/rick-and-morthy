import { renderHook } from '@testing-library/react-hooks';
import useFetch from '../hooks/useFetch';

interface ICharacter {
    id: number
    name: string
    image: string
}

it('returns state before fetch (loading: true, data: null, totalPages: 0, error: false)', async () => {
    const url = 'https://rickandmortyapi.com/api/character';
    const { result } = renderHook(() => useFetch<ICharacter[]>(url));
    const { data, error, loading, totalPages, totalItems } = result.current;

    expect(data).toBeNull();
    expect(error).toBeFalsy();
    expect(loading).toBeTruthy();
    expect(totalPages).toBe(null);
    expect(totalItems).toBe(null);
});

it('returns first page with 20 characters inside data', async () => {
    const url = 'https://rickandmortyapi.com/api/character?page=1';
    
    const { result, waitForNextUpdate } = renderHook(() => useFetch<ICharacter[]>(url));
    await waitForNextUpdate();

    const { data, error, loading, totalPages, totalItems } = result.current;
    expect(data).toHaveLength(20);
    expect(loading).toBeFalsy();
    expect(error).toBeFalsy();
    expect(totalPages).toBe(42);
    expect(totalItems).toBe(826);
});

it('returns Rick Sanchez character\'s data', async () => {
    const url = 'https://rickandmortyapi.com/api/character/1';
    
    const { result, waitForNextUpdate } = renderHook(() => useFetch<ICharacter>(url));
    await waitForNextUpdate();

    const { data, error, loading } = result.current;
    expect(data?.name).toBe('Rick Sanchez');
    expect(loading).toBeFalsy();
    expect(error).toBeFalsy();
});

it('returns error after fetch', async () => {
    const url = 'https://rickandmortyapi.com/api/character/1111';
    
    const { result, waitForNextUpdate } = renderHook(() => useFetch<ICharacter>(url));
    await waitForNextUpdate();

    const { data, error, loading } = result.current;
    expect(data).toBeNull();
    expect(loading).toBeFalsy();
    expect(error).toBeTruthy();
});
