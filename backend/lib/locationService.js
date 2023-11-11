module.exports = function isLocationInRadius(baseLocation, targetLocation, radiusInKilometers) {
    const earthRadius = 6371;

    // Convert degrees to radians
    function toRadians(degrees) {
        return degrees * (Math.PI / 180);
    }

    // Haversine formula to calculate distance between two points
    function calculateHaversine(lat1, lon1, lat2, lon2) {
        const dLat = toRadians(lat2 - lat1);
        const dLon = toRadians(lon2 - lon1);

        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);

        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return earthRadius * c;
    }

    const distance = calculateHaversine(
        baseLocation.latitude,
        baseLocation.longitude,
        targetLocation.latitude,
        targetLocation.longitude
    );

    // Check if the distance is within the specified radius
    return distance <= radiusInKilometers;
}