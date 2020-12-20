export function apiCall<ReturnType>(link: string): Promise<ReturnType> {
    return fetch(link).then(response => response.json())
}