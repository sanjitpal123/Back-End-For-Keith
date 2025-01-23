import aboutusinhomepage from "../../Model/homepage/About.js";

export const Aboutinhome = async (req, res) => {
    try {
        const { header, content } = req.body;
        console.log('header', header);

        // Check if a document already exists
        const existingDocument = await aboutusinhomepage.findOne();

        if (existingDocument) {
            // Update the existing document
            const updated = await aboutusinhomepage.findByIdAndUpdate(
                existingDocument._id,
                { header, content },
                { new: true } // Return the updated document
            );

            if (updated) {
                return res.status(200).json({
                    message: 'Updated successfully',
                    document: updated,
                });
            }

            return res.status(400).json({
                message: 'Could not update the document',
                success: false,
            });
        }

        // Create a new document if none exists
        const created = await aboutusinhomepage.create({
            header,
            content,
        });

        if (created) {
            return res.status(201).json({
                message: 'Uploaded successfully',
                document: created,
            });
        }

        return res.status(400).json({
            message: 'Could not create the document',
            success: false,
        });

    } catch (error) {
        console.error('Error in Aboutinhome:', error);
        return res.status(500).json({
            message: 'Internal server error',
            success: false,
        });
    }
};
