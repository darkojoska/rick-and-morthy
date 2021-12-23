import { getAllByTestId, render, waitFor } from '@testing-library/react';
import { StaticRouter } from 'react-router-dom';
import CharactersGrid from '../components/CharactersGrid';


it('displays CharactersGrid component with 20 cards', async () => {
    const mockLocation = {
        "pathname": "/characters",
        "search": "?page=1",
        "hash": "",
        "key": "xn16ri"
    };

    const component = render(
        <StaticRouter location={mockLocation}>
            <CharactersGrid />
        </StaticRouter>
    );

    const grid = await component.findByTestId('grid');
    await waitFor(() => expect(getAllByTestId(grid, "card")).toHaveLength(20));
});